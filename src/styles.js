import wall from './assets/Image/wall.jpg';

export const cardBody = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'fit-content',
  paddingTop: '10rem',
  position: 'relative',
};
export const cardTitle = {
  marginBottom: '1.5rem',
};

export const valueField = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};
export const check = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const backImage = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#3d3939',
  backgroundImage: `url(${wall})`,
}