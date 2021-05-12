import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Generator } from './../Generator';
import { SavedList } from './../SavedList';
import { About } from './../About';
import { NotFound } from './../NotFound';

import { Container } from './styles';

export function Content() {
  const location = useLocation();

  return (
    <Container>
      <TransitionGroup>
        <CSSTransition
          timeout={{
            enter: 800,
            exit: 400
          }}
          classNames="pageSlider"
          key={location.pathname}
        >
          <Switch location={location}>
            <Route
              exact
              path="/"
            >
              <Generator />
            </Route>

            <Route
              exact
              path="/saved"
            >
              <SavedList />
            </Route>

            <Route
              exact
              path="/about"
            >
              <About />
            </Route>

            <Route
              path="*"
            >
              <NotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};
