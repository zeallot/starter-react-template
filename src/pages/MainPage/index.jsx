/** @jsx jsx */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/components/Buttons';
import Container from '../../shared/components/Container';
import { fetchDog } from './redux/actions';

const MainPage = ({ fetchRandomDogImage, image }) => (
  <Container>
    <Link to="/">To ...</Link>
    <img
      css={css`
        max-width: 200px;
        width: 100%;
        height: auto;
      `}
      src={image}
      alt=""
    />
    <Button onClick={() => fetchRandomDogImage()}>Button</Button>
  </Container>
);

MainPage.propTypes = {
  fetchRandomDogImage: PropTypes.func.isRequired,
  image: PropTypes.string,
};

MainPage.defaultProps = {
  image: '',
};

const stateToProps = (state) => ({
  image: state.example.img,
});

const dispatchToProps = {
  fetchRandomDogImage: fetchDog,
};

export default connect(stateToProps, dispatchToProps)(MainPage);
