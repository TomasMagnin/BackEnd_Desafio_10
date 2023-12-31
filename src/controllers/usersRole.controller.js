import { UserModel } from "../DAO/mongo/models/users.model.js"
import { CustomError } from "../services/errors/custom-error.js";
import EErros from "../services/errors/enums.js";

export const toggleUserRole = async (req, res) => {
    const { uid } = req.params;
    const user = await UserModel.findById(uid);

    if (!user) {
        throw CustomError.createError({
            name: '404 not found error',
            cause: user,
            message: 'Not Found',
            code: EErros.NOT_FOUND_ERROR,
        });
    }

    user.role = user.role === 'user' ? 'premium' : 'user';
    await user.save();

    return res.status(200).json({ message: 'User role updated successfully', user });
};