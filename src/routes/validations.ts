import Joi from 'joi';

const schema = {
    // Auth Routes

    loginUser: {
        body: Joi.object().keys({
            username: Joi.string(),
            password: Joi.string()
        }),
        params: Joi.object().keys()
    },
    signUpUser: {
        body: Joi.object().keys({
            id: Joi.string(),
            name: Joi.string(),
            email: Joi.string(),
            password: Joi.string()
        }),
        params: Joi.object().keys()
    },

    // User Routes

    saveUser: {
        body: Joi.object().keys({
            id: Joi.string(),
            name: Joi.string(),
            email: Joi.string(),
            password: Joi.string()
        }),
        params: Joi.object().keys()
    },
    getUser: {
        body: Joi.object().keys({}),
        params: Joi.object().keys({
            userId: Joi.string()
        })
    },
    getUsers: {
        body: Joi.object().keys(),
        params: Joi.object().keys()
    },

    // Parking Routes

    toggleParking: {
        body: Joi.object().keys({
            userId: Joi.string(),
            parkingAreaId: Joi.number(),
            parkingSlotId: Joi.number(),
            type: Joi.string()
        }),
        params: Joi.object().keys()
    },
    viewAllParking: {
        body: Joi.object().keys(),
        params: Joi.object().keys()
    },
    viewUserParking: {
        body: Joi.object().keys(),
        params: Joi.object().keys({
            userId: Joi.string()
        })
    }
};

export default schema;
