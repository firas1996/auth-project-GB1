// import AuthContext from "../../store/auth-context";
// import classes from "./Navigation.module.css";

// const Navigation = () => {
//   return (
//     <AuthContext.Consumer>
//       {(authCTX) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {authCTX.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {authCTX.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {authCTX.isLoggedIn && (
//                 <li>
//                   <button onClick={authCTX.logoutHandler}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };

// export default Navigation;

import { useContext } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
