export interface IText {
	text: string
}

export interface IIMage {
	image: string,
	caption: string
}

export interface ILink {
	text: string,
	link: string
}

export interface IFile {
	link: string
	name: string
}

export interface ICode {
	file: string,
	language: string,
	code: string
}

export interface ICommand {
	command: string
}

export interface IStep {
	title: string,
	items: [(IText | IIMage | ILink | IFile | ICode | ICommand)]
}