import { BrowserRouter, Route, Switch } from "react-router-dom";

import Warmup from "./components/warmpup/warmup";
import User from "./components/user/user";
import UserDetails from "./components/user/userDetails";
import Post from "./components/posts/posts";
import PostDetails from "./components/posts/postDetails";
import Albums from "./components/albums/AlbumList";
import AlbumPhoto from "./components/albums/AlbumPhoto";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Warmup} />
        <Route path="/user" exact component={User} />
        <Route path="/userdetails" exact component={UserDetails} />
        <Route path="/posts" exact component={Post} />
        <Route path="/postDetails" exact component={PostDetails} />
        <Route path="/albums" exact component={Albums} />
        <Route path="/photos" exact component={AlbumPhoto} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
