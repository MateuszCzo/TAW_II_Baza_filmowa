const bcrypt = require("bcrypt");
const User = require("../database/models/user.model");
const { generateJWT } = require("../utils/generateJWT");

const registerUser = async (request, response) => {
    const { name, email, password } = request.body;

    try {
        if (password < 6) {
            return response
            .status(400)
            .json({error: "Password must be at least 6 characters logn."});
        }

        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialChars.test(password)) {
            return response.status(400).json({
                error: "Password must contain at least one special character.",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(400).json({ error: "A user with the provided email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });

        await user.save();
        const token = generateJWT(user._id, user.name);

        response.status(200).json({ message: "User registered successfully.", token });

    } catch (error) {
        response.status(500).json({ error: "Error registering user." });
    }
};

const loginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return response.status(400).json({ error: "Invalid email or password." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return response.status(400).json({ error: "Invalid email or password." });
        }

        const token = generateJWT(user._id, user.name);

        response.status(200).json({ message: "User logged in successfully.", token });

    } catch (error) {
        response.status(500).json({ error: "Error logging in user." });
    }
}

module.exports = { registerUser, loginUser };
