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
		{
			name: 'Скарги',
			url: '/report',
			icon: 'icon-dislike',
		},
	],
};
