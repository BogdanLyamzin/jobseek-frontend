export default {
  items: [
    {
      name: 'Компанії',
      url: '/companies',
      icon: 'icon-home',
    },
    {
      name: 'Навички',
      url: '/skills',
      icon: 'icon-puzzle',
    },
    {
      name: 'Мови програмування',
      url: '/languages',
      icon: 'cui-code',
    },
    {
      name: 'Шаблони вакансій',
      url: '/vacancies',
      icon: 'icon-note',
    },
    {
      name: 'Професійні сфери',
      url: '/spheres',
      icon: 'icon-globe',
    },
    // {
    //   name: 'Breadcrumbs',
    //   url: '/breadcrumbs',
    //   icon: 'icon-puzzle',
    // },
    {
      name: 'Collapses',
      url: '/collapses',
      icon: 'icon-puzzle',
    },
    {
      name: 'Dropdowns',
      url: '/dropdowns',
      icon: 'icon-puzzle',
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'icon-puzzle',
    },
    {
      name: 'List groups',
      url: '/list-groups',
      icon: 'icon-puzzle',
    },
    {
      name: 'Navs',
      url: '/navs',
      icon: 'icon-puzzle',
    },
    {
      name: 'Paginations',
      url: '/paginations',
      icon: 'icon-puzzle',
    },
    {
      name: 'Popovers',
      url: '/popovers',
      icon: 'icon-puzzle',
    },
    {
      name: 'Switches',
      url: '/switches',
      icon: 'icon-puzzle',
    },
    {
      name: 'Tabs',
      url: '/tabs',
      icon: 'icon-puzzle',
    },
    {
      name: 'Tooltips',
      url: '/tooltips',
      icon: 'icon-puzzle',
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },

        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Авторизація',
      url: '/authorization',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/authorization/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/authorization/register',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Сторінки',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star',
        },
      ],
    },

    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'https://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};
