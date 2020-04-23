import { PROMO } from './types';

export const handleChange = (e) => {
    (dispatch) => {
        dispatch({
            type: PROMO,
            payload: e.target.value
        })
    };
};
