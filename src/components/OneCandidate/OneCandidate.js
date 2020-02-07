import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

import './OneCandidate.css';
const user = null;

const OneCandidate = () => {
	return (
		<div className="container candidates">
			<div className="candidate-head">
				<div className="candidate-vacancyNames">
					Full Stack Javascript Developer
				</div>
				<div className="candidate-dates">
					<div className="candidate-date">Опубліковано 21.09.19</div>
					<div className="candidate-date candidate-date-bold">
						Запрошено 21.09.19
					</div>
					<a href="nothing" className="candidate-date candidate-date-flex">
						<GetAppIcon />
						Завантажити
					</a>
				</div>
			</div>

			<div className="candidate-background">
				<div className="candidate-img-flex">
					{user && <img className="candidate-img" alt="candidate" />}
					{!user && <div className="candidate-img" />}
					<div>
						<div className="candidate-names">Ivan Orlov</div>
						<div className="candidate-location">Ukraine, Kyiv</div>
					</div>
				</div>
				<div className="candidate-background-flex">
					<div className="candidate-background-item">
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">
								Форма зайнятості
							</div>
							<div className="candidate-property candidate-info-item">
								Робота в офісі на повний день
							</div>
						</div>
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">
								Можливість переїзду
							</div>
							<div className="candidate-property candidate-info-item">
								Переїзд в інше місто України
							</div>
						</div>
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">
								Бажана зарплата
							</div>
							<div className="candidate-property candidate-info-item">
								1000 USD
							</div>
						</div>
					</div>
					<div className="candidate-background-item">
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">
								Соціаньні мережі
							</div>
							<a
								href="nothing"
								className="candidate-property candidate-info-item"
							>
								facebook
							</a>
						</div>
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">
								URL (Git Hub)
							</div>
							<a
								href="nothing"
								className="candidate-property candidate-info-item"
							>
								https://github.com/profile
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="candidate-background">
				<div className="candidate-field">Навички</div>
				<div className="candidate-background-flex-skill">
					<div className="candidate-info-item">
						<div className="candidate-key">English level</div>
						<div className="candidate-property">B1 (intermediate)</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">HTML</div>
						<div className="candidate-property">1-2 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">CSS</div>
						<div className="candidate-property">1-2 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">AJAX</div>
						<div className="candidate-property">3-4 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">JavaScript</div>
						<div className="candidate-property">3-4 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">TypeScript</div>
						<div className="candidate-property">3-4 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">PHP</div>
						<div className="candidate-property">3-4 years</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">React</div>
						<div className="candidate-property">3-4 years</div>
					</div>
				</div>
			</div>

			<div className="candidate-background">
				<div className="candidate-field">Досвід (2-3 роки)</div>
				<div className="candidate-background-flex-skill">
					<div className="candidate-info-item">
						<div className="candidate-key">Посада</div>
						<div className="candidate-property margin-bottom-30">
							Web developer
						</div>
						<div className="candidate-key">Компанія</div>
						<div className="candidate-property margin-bottom-30">
							Storony Travel Company
						</div>
						<div className="candidate-key">Період роботи</div>
						<div className="candidate-property margin-bottom-30">
							Грудень 2018 - зараз працюю тут
						</div>
					</div>
					<div className="candidate-info-item">
						<div className="candidate-key">Посада</div>
						<div className="candidate-property margin-bottom-30">
							Frontend developer
						</div>
						<div className="candidate-key">Компанія</div>
						<div className="candidate-property margin-bottom-30">
							Legacyusa.com
						</div>
						<div className="candidate-key">Період роботи</div>
						<div className="candidate-property margin-bottom-30">
							Серпень 2017 - Грудень 2018
						</div>
					</div>
				</div>
			</div>

			<div className="candidate-background">
				<div className="candidate-field">Освіта</div>
				<div className="candidate-background-flex-skill">
					<div className="candidate-info-item">
						<div className="candidate-key">Учбовий заклад</div>
						<div className="candidate-property margin-bottom-30">
							National Technical University of Ukraine
						</div>
						<div className="candidate-key">Спеціальність</div>
						<div className="candidate-property margin-bottom-30">
							Applied mathematics
						</div>
						<div className="candidate-key">Ступінь</div>
						<div className="candidate-property margin-bottom-30">Бакалавр</div>
						<div className="candidate-key">Період навчання</div>
						<div className="candidate-property margin-bottom-30">
							Вересень 2011 - Травень 2016
						</div>
					</div>
				</div>
			</div>

			<div className="candidate-background-flex">
				<div className="candidate-background candidate-background-footer">
					<div className="candidate-field">Досягнення</div>
					<div className="candidate-property margin-bottom-30">
						oporaua.org - developed and integrated with the backend interface
						for the Ukrainian news site
					</div>
					<div className="candidate-property margin-bottom-30">
						tradalaxy.com - participated in the development of an interface for
						a large b2b platform
					</div>
					<div className="candidate-property margin-bottom-30">
						badata.net - developed an interface for design agency
					</div>
				</div>
				<div className="candidate-background candidate-background-footer">
					<div className="candidate-field">Очікування від роботи</div>
					<div className="candidate-property margin-bottom-30">
						I would like to continue working in the area of web development.
					</div>
					<div className="candidate-property margin-bottom-30">
						My priorities: self-growth, great company culture, learning from
						experts in the field.
					</div>
				</div>
			</div>

			<div className="candidate-background">
				<div className="candidate-field">Контакти</div>
				<div className="candidate-background-flex">
					<div className="candidate-background-footer">
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">e-mail:</div>
							<div className="candidate-property candidate-info-item">
								i.orlov@gmail.com
							</div>
						</div>
					</div>
					<div className="candidate-background-footer">
						<div className="candidate-info-flex">
							<div className="candidate-key candidate-info-item">Phone:</div>
							<div className="candidate-property candidate-info-item">
								067 25 87 574
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="candidate-btn-flex">
				{user && (
					<>
						<button className="candidate-btn candidate-btn-red">
							Ігнорувати
						</button>
						<button className="candidate-btn candidate-btn-green">
							Запросити
						</button>
					</>
				)}
				{!user && (
					<>
						<button className="candidate-btn candidate-btn-red">
							Відмовити
						</button>
						<button className="candidate-btn candidate-btn-green">
							Прийняти
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default OneCandidate;
