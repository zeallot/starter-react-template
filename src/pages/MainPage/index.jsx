import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../shared/basic-components/Buttons';
import Container from '../../shared/basic-components/Container';
import { fetchDog } from './redux/actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const { image } = useSelector((state) => ({
    image: state.dog.img,
  }));
  const onRollDog = () => {
    dispatch(fetchDog());
  };

  return (
    <Container>
      <img src={image} alt="" />
      <Button onClick={onRollDog}>Roll dog</Button>
    </Container>
  );
};

export default MainPage;
