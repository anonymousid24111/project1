import React, { Component } from 'react';
class Pay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pay: [
				{
					id: 1,
					name: 'Ngân hàng Vietinbank chi nhánh TP Hà Nội',
					holder: ' Chủ Tài khoản: Nguyễn Thị Hồng Luyến',
					account: 'Số Tài Khoản : 105867392582',
					namelink: 'https://www.vietinbank.vn',
					link: 'www.vietinbank.vn',
					image: 'image/vietinbank.jpg',
					status: true
				},
				{
					id: 2,
					name: 'Ngân hàng Sacombank chi nhánh TP Hà Nội',
					holder: ' Chủ Tài khoản: Nguyễn Thị Hồng Luyến',
					account: 'Số Tài Khoản : 020082756303',
					namelink: 'https://www.sacombank.com.vn',
					link: 'www.Sacombank.vn',
					image: 'image/Sacombank.jpg',
					status: true
				},
				{
					id: 3,
					name: 'Ngân hàng Agribank chi nhanh TP Hà Nội',
					holder: ' Chủ Tài khoản: Nguyễn Thị Hồng Luyến',
					account: 'Số Tài Khoản : 19035007356012',
					namelink: 'http://www.agribank.com.vn',
					link: 'www.techcombank.vn',
					image: 'image/agribank.jpg',
					status: true
				},
				{
					id: 4,
					name: 'Ngân hàng Techcombank chi nhanh TP Hà Nội',
					holder: ' Chủ Tài khoản: Nguyễn Thị Hồng Luyến',
					account: 'Số Tài Khoản : 19035007356012',
					namelink: 'https://www.techcombank.com.vn',
					link: 'www.techcombank.vn',
					image: 'image/teckcombank.jpg',
					status: true
				},
			],
			isActive: true
		};
	}
	render() {
		let elements = this.state.pay.map((pay, index) => {
			let result = '';
			if (pay.status) {
				result = <tr key={index} >
					<td>
						<img class="img-responsive img-fluid" height="130" width="200" src={pay.image} alt="hinhthe"></img>
					</td>
					<td>

						<p><strong> {pay.name} </strong></p>
						<p>{pay.holder} </p>
						<p><strong> {pay.account}
						</strong></p>
						<a href={pay.namelink} class="text-primary">
							{pay.link}</a>
					</td>
				</tr>
			}
			return result;
		});
		return (
			<div className="container">
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
						<h1>Thanh Toán </h1>

						<table class="table table-condensed ">
							<tbody>
								{elements}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}
export default Pay;