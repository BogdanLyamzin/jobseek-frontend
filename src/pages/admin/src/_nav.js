export default {
  items: [
    {
      name: 'Компанії',
      url: '/companies',
      icon: 'icon-home',
    },
    {
      name: 'HR',
      url: '/hr',
      icon: 'icon-user',
    },
    {
      name: 'Навички',
      url: '/skills',
      icon: 'icon-puzzle',
    },
    {
      name: 'Категорії',
      url: '/categories',
      icon: 'icon-tag',
    },
    {
      name: 'Вакансії',
      url: '/vacancyTemplate',
      icon: 'icon-note',
    },
    {
      name: 'Професії',
      url: '/professions',
      icon: 'icon-graduation',
    },
    {
      name: 'Професійні сфери',
      url: '/spheres',
      icon: 'icon-globe',
    },
    {
      name: 'Адміністратори',
      url: '/administrators',
      icon: 'icon-user',
    },

    // {
    //   name: 'List groups',
    //   url: '/list-groups',
    //   icon: 'icon-puzzle',
    // },
    // {
    //   name: 'Navs',
    //   url: '/navs',
    //   icon: 'icon-puzzle',
    // },
    // {
    //   name: 'Popovers',
    //   url: '/popovers',
    //   icon: 'icon-puzzle',
    // },
    // {
    //   name: 'Tabs',
    //   url: '/tabs',
    //   icon: 'icon-puzzle',
    // },
    // {
    //   name: 'Tooltips',
    //   url: '/tooltips',
    //   icon: 'icon-puzzle',
    // },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   divider: true,
    // },
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
