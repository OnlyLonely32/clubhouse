import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';

passport.use(
  'github',
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      const user = {
        displayName: profile.displayName,
        username: profile.username,
        avatarUrl: profile.photos?.[0].value,
      };
    },
  ),
);

export { passport };
