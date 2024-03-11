import { Suspense } from "react";
import PropTypes from 'prop-types';
import loadingGif from '../GIF/load.gif'; // Update the path to your loading GIF

const LazyLayout = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={<img src={loadingGif} alt="Loading..." />}>
            <Component {...rest} />
        </Suspense>
    );
};

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default LazyLayout;
