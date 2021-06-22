import { FunctionComponent } from 'react';
import Avatar from '../../../components/atoms/Avatar';
import TopNav from '../../../components/molecules/TopNav';

const SsgPage: FunctionComponent = () => (
  <div>
    <TopNav TopNavItems={[{ name: 'home', path: '/' },{ name: 'ssg', path: '/render-strategies/ssg' }, { name: 'ssr', path: '/render-strategies/ssr' }  ]} />
    <Avatar />
  </div>
);

export default SsgPage;
