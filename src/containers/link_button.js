import { Button } from 'reactstrap';
import link from '../hocs/link';
import linkWrapper from '../components/link_wrapper';

export default link(linkWrapper(Button));
