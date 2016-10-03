// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import A from './components/pages/PaginaA';
import B from './components/pages/PaginaB';

//import page from 'page';

let renderer = (Component) => {
  return () => {
    new Vue({
      replace: false,
      el: '#app',
      render: h => h(Component)
    });
  };
};

page('/', renderer(App));
page('/a', renderer(A));
page('/b', renderer(B));
page.start();
