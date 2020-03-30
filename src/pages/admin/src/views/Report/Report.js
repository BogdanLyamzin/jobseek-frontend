import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import API from '../../../../../services/api';
import toastr from '../../../../../utils/toastr/toastrAction';

const Report = () => {
	const [report, setReport] = React.useState(null);
	React.useEffect(() => {
		API.get('reports').then(data => setReport(data.result));
	});

	const deleteReport = id => {
		API.delete(`reports/${id}`).then(data => toastr(data, 'Скаргу видалено'));
	};

	const deleteComment = (id, reviewId) => {
		API.delete(`reports/${id}`);
		API.delete(`reviews/${reviewId}`).then(data =>
			toastr(data, 'Коментар видалено'),
		);
	};

	return (
		<div className="animated fadeIn">
			<Row>
				<Col sm="12">
					<Card>
						<CardHeader className="d-flex justify-content-between">
							<strong>Список скарг: </strong>
						</CardHeader>
						<CardBody>
							{report && report.length === 0 && <div>Немає скарг</div>}
							{report &&
								report.map(elem => {
									return (
										<div key={elem._id} className="w-100 my-4">
											<div className="mb-2">Від кого: {elem.name}</div>
											<div className="mb-2">На коментар: {elem.reviewText}</div>
											<button
												className="btn btn-pill btn-success mr-4"
												onClick={() => deleteComment(elem._id, elem.reviewId)}
											>
												Видалити коментар і скаргу
											</button>
											<button
												className="btn btn-pill btn-success"
												onClick={() => deleteReport(elem._id)}
											>
												Видалити скаргу
											</button>
										</div>
									);
								})}
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Report;
