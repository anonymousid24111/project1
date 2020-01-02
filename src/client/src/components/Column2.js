import React, {Component} from 'react';
import axios from 'axios';

class Clumn2 extends Component{
	constructor(props) {
    super(props);
    this.state = {
      	mang : "",
      	sim : "",
      	dauso : "",
      	tongdiem :"",
      	giatu:"",
      	den:"",
      	so:"",
    	products:[],
    	gioHang: [],
    };
  }
	componentDidMount(){
  	axios.get('/search').then(result=>this.setState({
    		products: result.data
  	}));
	}
  handleSubmitForm(event) {
  	var {mang,sim,dauso,tongdiem,giatu,den,so}=this.state;
		axios.get(`/search?mang=${mang}&sim=${sim}&dauso=${dauso}&tongdiem=${tongdiem}&giatu=${giatu}&den=${den}&so=${so}`).then(result=>this.setState({
      	products: result.data
    }));
    event.preventDefault();
  }
	onChange= (e)=>{
		var target = e.target;
	  	var name = target.name;
	  	var value = target.value;
	    this.setState({
	      	[name] : value
	    })
	}

	//muaHang
	muaHang(item){
		
		this.state.gioHang.push(item);
		let sim = document.createElement("tr");
			
		let stt = document.createElement("td");
		let sttText = document.createTextNode(this.state.gioHang.length);
		stt.appendChild(sttText);
		sim.appendChild(stt);

		let so = document.createElement("td");
		let soText = document.createTextNode(item["numberphone"]);
		so.appendChild(soText);
		sim.appendChild(so);

		let gia = document.createElement("td");
		let giaText = document.createTextNode(item["gia"]);
		gia.appendChild(giaText);
		sim.appendChild(gia);

		document.getElementById("gioHang").appendChild(sim);
	}	
	render(){
		return(
		
			<div>
				<form onSubmit={event => this.handleSubmitForm(event)}>
				<select name="mang" onChange={this.onChange}>
					<option value="">Network</option>
					<option value="Viettel">Viettel</option>
					<option value="Vinaphone">Vinaphone</option>
					<option value="Mobifone">Mobilefone</option>
					<option value="Vietnamobile">Vietnamobile</option>
					<option value="Gmobile">Gmobile</option>
				</select>
				<select name="sim" onChange={this.onChange}>
					<option value="">Sim</option>
					<option value="simtuquy">Sim tứ quý</option>
					<option value="simnguquy">Sim ngũ quý</option>
					<option value="simlucquy">Sim lục quý</option>
					<option value="simlocphat">Sim lộc phát</option>
					<option value="simthantai">Sim thần tài</option>
					<option value="simongdia">Sim ông địa</option>
					<option value="simtiendon">Sim tiến đơn</option>
					<option value="simtiendoi">Sim tiến đôi</option>
					<option value="simlap">Sim lặp</option>
					<option value="simkep">Sim kép</option>
					<option value="simtaxi2">Sim taxi 2</option>
					<option value="simtaxi3">Sim taxi 3</option>
					<option value="simtaxi4">Sim taxi 4</option>
					<option value="simdoi">Sim đối</option>
					<option value="simdao">Sim đảo</option>
					<option value="simganh">Sim gánh</option>
					<option value="simtamhoadon">Sim tam hoa đơn</option>
					<option value="simtamhoakep">Sim tam hoa kép</option>
					<option value="simnamsinh">Sim năm sinh</option>
					<option value="simdacbiet">Sim đặc biệt</option>
				</select>
				<select name="dauso" onChange={this.onChange}>
					<option value="">Đầu số</option>
					<option value="090">090</option>
					<option value="091">091</option>
					<option value="092">092</option>
					<option value="093">093</option>
					<option value="094">094</option>
					<option value="095">095</option>
					<option value="096">096</option>
					<option value="097">097</option>
					<option value="098">098</option>
					<option value="099">099</option>
				</select>
				Tổng điểm : <input type="text" name="tongdiem" placeholder="49" onChange={this.onChange}/><br/>
				Min Price : <input type="text" name="giatu" placeholder="500000" onChange={this.onChange}/>VND<br/>
				Max Price : <input type="text" name="den" placeholder="100000000" onChange={this.onChange}/>VND<br/>
				<input type="text" name="so" placeholder="09XXXXXXXX" onChange={this.onChange}/>
				<input type="submit" value="Submit"/>
				
				</form>
				<div>
				<table id="customers">
					<thead>
						<tr>
							<th>STT</th>
							<th>Số</th>
							<th>Giá</th>
							<th>Tổng</th>
							<th>Mạng</th>
							<th>Kiểu</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{this.state.products.map((item, index) => (
				    <tr key={index}>
				      	<td>{index+1}</td>
				      	<td>{item.numberphone}</td>
				      	<td>{item.gia}</td>
				      	<td>{item.tong}</td>
				      	<td>{item.mang}</td>
				      	<td>{item.dang}</td>
				      	<td><div className="container">
 
  <button type="button"  onClick = {this.muaHang.bind(this, item)} className="btn btn-primary" data-toggle="modal" data-target="#myModal" >
    Chọn sim
  </button>

 
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Giỏ hàng</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
      
        <div className="modal-body">
         	

        	
         	
        	<table id="customers">
					<thead>
						<tr>
							<th>STT</th>
							<th>Số</th>
							<th>Giá</th>
							
						</tr>
					</thead>
					<tbody id = "gioHang">
							
				
				    </tbody>
			   	</table>

        	

        </div>
        
      
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div></td>
				     </tr>
				    ))}
				    </tbody>
			   	</table>
		  		</div>
			</div>
		
		)
	}
}
export default Clumn2;