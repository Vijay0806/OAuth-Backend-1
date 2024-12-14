import passport from 'passport';
import dotenv from "dotenv";
dotenv.config();
export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
export const githubAuth = passport.authenticate('github', { scope: ['user:email'] });

export const authCallback = (provider) => passport.authenticate(provider, { failureRedirect: '/' });

export const redirectProfile = (req, res) => {
  res.redirect('/profile');
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.redirect(process.env.CLIENT_URL);
  });
};
