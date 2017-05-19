import routes from './routes';

const load = ({ adminContext }) => {
  if (!adminContext) {
    throw new Error(
      'Please provide a adminContext-object in your mantra-context. use createAdminContext for that',
    );
  }
};

export default { routes, load };
