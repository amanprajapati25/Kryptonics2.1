import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import Header from "../components/Header";
import { toFixed } from "@rc-component/mini-decimal";
import { Button, Modal } from "antd";
import { useHistory } from "react-router-dom";

const CoinDetails = () => {
  let history = useHistory();
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [chartPage, openChartPage] = useState(false);
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const classes = useStyles();
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  console.log("coin is here", coin);
  return (
    <div style={{ margin: "3rem" }}>
      <div>
        <Typography
          variant="h3"
          style={{ marginBottom: "1rem", color: "goldenrod" }}
        >
          {coin?.name + " Sentimental Analysis"}
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Positive Sentiments:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" style={{ color: "green" }}>
            {coin?.sentiment_votes_up_percentage}%
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Negative Sentiments:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" style={{ color: "red" }}>
            {coin?.sentiment_votes_down_percentage}%
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Overall Sentiments:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              color:
                coin?.sentiment_votes_up_percentage -
                  coin?.sentiment_votes_down_percentage >=
                50
                  ? "green"
                  : "red",
            }}
          >
            {coin?.sentiment_votes_up_percentage.toFixed(0) -
              coin?.sentiment_votes_down_percentage.toFixed(0)}
            %
          </Typography>
        </div>
        <div>
          <Typography
            variant="h3"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "goldenrod",
            }}
          >
            {coin?.name + " Score"}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Liquidity Score:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              color: coin?.liquidity_score >= 50 ? "green" : "red",
            }}
          >
            {coin?.liquidity_score}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Public Interest Score:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              color: coin?.public_interest_score >= 0.02 ? "green" : "red",
            }}
          >
            {coin?.public_interest_score}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Community Score:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              color: coin?.community_score >= 50 ? "green" : "red",
            }}
          >
            {coin?.community_score}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            User's Watchlist:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              color:
                coin?.watchlist_portfolio_users >= 1000000 ? "green" : "red",
            }}
          >
            {numberWithCommas(coin?.watchlist_portfolio_users)}
          </Typography>
        </div>
        <div>
          <Typography
            variant="h3"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "goldenrod",
            }}
          >
            {coin?.name + " Ranking"}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Market Cap Ranking:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5">{coin?.market_cap_rank}</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" style={{ color: "#b57edc" }}>
            Kryptonics Ranking:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5">{coin?.coingecko_rank}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "7rem",
            marginLeft: "9rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Button
              size="large"
              style={{
                width: "20vw",
                border: "none",
                color: "white",
                backgroundColor: "goldenrod",
              }}
              onClick={showModal}
            >
              Final Verdict
            </Button>
          </div>
          <div>
            <Button
              size="large"
              style={{
                width: "20vw",
                border: "none",
                color: "white",
                backgroundColor: "goldenrod",
              }}
              //   onClick={() => {
              //     openChartPage(true);
              //   }}
              onClick={() => {
                history.push("/coinInfo", { coin: coin });
              }}
            >
              Launch Chart
            </Button>
            {/* {openChartPage && <CoinInfo coin={coin} />} */}
          </div>
        </div>
        <Modal
          centered // To center the modal content
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ textAlign: "center" }}>
            <Typography variant="h2" style={{ color: "goldenrod" }}>
              Final Verdict
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Typography variant="h6">Overall Status</Typography> */}
              <Typography variant="h2" style={{ marginBottom: 16 }}>
                {coin?.developer_score +
                  coin?.community_score +
                  coin?.coingecko_score >=
                75 ? (
                  <span style={{ color: "green" }}>😄 Buy</span>
                ) : coin?.developer_score +
                    coin?.community_score +
                    coin?.coingecko_score >=
                  40 ? (
                  <span style={{ color: "orange" }}>😐 Neutral</span>
                ) : (
                  <span style={{ color: "red" }}>😢 Sell</span>
                )}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   alignItems: "center",
                }}
              >
                <Typography variant="h4" style={{ color: "#b57edc" }}>
                  Final Kryptonics Score:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h4"
                  style={{
                    color:
                      coin?.developer_score +
                        coin?.community_score +
                        coin?.coingecko_score >=
                      75
                        ? "green"
                        : coin?.developer_score +
                            coin?.community_score +
                            coin?.coingecko_score >=
                          40
                        ? "orange"
                        : "red",
                  }}
                >
                  {(
                    (coin?.developer_score +
                      coin?.community_score +
                      coin?.coingecko_score) /
                    3
                  ).toFixed()}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   alignItems: "center",
                }}
              >
                <Typography variant="h4" style={{ color: "#b57edc" }}>
                  Kryptonics Ranking:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h4"
                  style={{
                    color: coin?.coingecko_rank <= 10 ? "green" : "blue",
                  }}
                >
                  {coin?.coingecko_rank}
                </Typography>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CoinDetails;
