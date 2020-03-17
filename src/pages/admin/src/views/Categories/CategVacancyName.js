import React, { Component } from 'react';
import axios from 'axios';

class CategVacancyName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vac: [],
			cat: [],
		};
	}

	componentDidMount() {
		let { parentId } = this.props;
		parentId.forEach(item => {
			axios
				.get(`http://localhost:5000/vacancytemplate/${item}`)
				.then(data => {
					if (data.data.result !== null) {
						let res = this.state.vac.concat(data.data.result.vacancyName);
						this.setState({ vac: res });
					}
				})
				.catch(err => err);

			axios
				.get(`http://localhost:5000/categories/${item}`)
				.then(data => {
					if (data.data.result !== null) {
						let res = this.state.cat.concat(data.data.result.categoryName);
						this.setState({ cat: res });
					}
				})
				.catch(err => err);
		});
	}

	render() {
		let { vac, cat } = this.state;
		return (
			<>
				{vac && <p>Вакансія: {vac.map(item => `${item}, `) || 'не додано'}</p>}
				{cat && (
					<p>
						Батьківська категорія: {cat.map(item => `${item}, `) || 'не додано'}
					</p>
				)}
			</>
		);
	}
}

export default CategVacancyName;
