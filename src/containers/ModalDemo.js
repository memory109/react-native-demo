import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Switch,
	TextInput
} from 'react-native';

// common component
import Button from '../components/Button';
import Modal from '../components/Modal';

export default class ModalDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// 模态框动画
			animationType: 'none',
			// 模态框显示控制
			modalVisible: false,
			transparent: true,
			input: ''
		};
	}
	_setModalVisible(visible) {
	    this.setState({modalVisible: visible});
  	}
  	// 输入事件
  	_input(value) {
		this.setState({
			input: value
		})
  	}

	render() {
		return (
			<View style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
		        <Modal
		          	animationType={this.state.animationType}
		          	transparent={this.state.transparent}
		          	visible={this.state.modalVisible}
		        >
		        	<TextInput 
		        		onChangeText = {(event)=> {
		        			this._input.call(this, event);
		        		}}
		        	/>
		        	<View style = {styles.btnGroup}>
			        	<Button
			        		onPress = {this._setModalVisible.bind(this, false)}
			        	>
			        		关闭模态框
			        	</Button>
			        	<Button
			        		onPress = {this._setModalVisible.bind(this, false)}
			        	>
			        		确定
			        	</Button>
		        	</View>
		        </Modal>

		        <Button onPress={this._setModalVisible.bind(this, true)}>
		            显示Modal
		        </Button>
	      </View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#F5FCFF'
	},
	innerContainer: {
		borderRadius: 10,
		alignItems: 'center',
	},
	row: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		marginBottom: 20,
	},
	rowTitle: {
		flex: 1,
		fontWeight: 'bold',
	},
	button: {
		borderRadius: 5,
		flex: 1,
		height: 44,
		alignSelf: 'stretch',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	buttonText: {
		fontSize: 18,
		margin: 5,
		textAlign: 'center',
	},
	modalButton: {
		marginTop: 10,
	},
	// 模态框按钮组
	btnGroup: {
		flexDirection: 'row'
	}
});