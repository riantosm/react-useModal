import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';

const useMySelector = () => useSelector((state: RootState) => state);

export default useMySelector;
