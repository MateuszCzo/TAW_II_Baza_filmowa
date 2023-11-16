const isAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Brak autoryzacji" });
        }
        if (req.user.role === "admin") {
            return next();
        }
        return res.status(403).json({ error: "Brak uprawnień administratora" });
    } catch (error) {
        console.error("Błąd podczas weryfikacji roli administratora:", error);
        return res.status(500).json({ error: "Błąd serwera" });
    }
};
module.exports = isAdmin;
