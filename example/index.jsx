import React from 'react'
import ReactDOM from 'react-dom'
import FungoEditor from '../src/index'

class Demo extends React.Component {
	constructor() {
		super()
		this.state = {
			value: ''
		}
		this.uploadProps = {
			name: 'image',
			action: 'https://tuobing.leanapp.cn/api/upload/image'
		}
	}

	onChange = (value) => {
		this.setState({ value })
	}

	componentDidMount() {
		this.editor.reset('随便输入点什么吧...😃')
	}

	render() {
		return (
			<div
				style={{
					paddingTop: '60px',
					width: '1000px',
					margin: '0 auto'
				}}
			>
				<h3 style={{ marginBottom: 30 }}>
					Github 仓库地址：
					<a href="https://github.com/Durianicecream/tb-editor" target="_blank">
						https://github.com/Durianicecream/tb-editor
					</a>
				</h3>
				<FungoEditor
					onChange={this.onChange}
					uploadProps={this.uploadProps}
					ref={(ele) => (this.editor = ele)}
				/>
				<div
					style={{
						padding: '30px 0'
					}}
				>
					<h1>HTML文本</h1>
					{this.state.value}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Demo />, document.getElementById('root'))
