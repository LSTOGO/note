import React from 'react';
import { Input,Button,List} from 'antd';

//无状态组件
const TodoListUI = (props) => {
  return(
    <div style={{marginTop:'10px'}}>
      <div  style={{marginLeft:'10px'}}>  
        <Input value={props.inputValue} placeholder="todo" 
          style={{width:'300px',marginRight:'10px'}}
          onChange={props.handleInputChange}
          />
        <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
      </div>
      <List 
        style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item onClick={() => {props.handleItemDelete(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component{
//   render() {
//     return(
//       <div style={{marginTop:'10px'}}>
//         <div  style={{marginLeft:'10px'}}>  
//           <Input value={this.props.inputValue} placeholder="todo" 
//             style={{width:'300px',marginRight:'10px'}}
//             onChange={this.props.handleInputChange}
//             />
//           <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
//         </div>
//         <List
//           style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (
//             <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// } 

export default TodoListUI;