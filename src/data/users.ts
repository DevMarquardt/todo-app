import { User } from "src/models/users/user";
export const users: User[] = [
	{
		"id": "joao.silva",
		"name": "João da Silva",
		"groups": [],
		"cardPermissions": [
			"Add"
		],
		"propertiesPermissions": [
			"Add"
		]
	},
	{
		"id": "henrique.santos",
		"name": "Henrique Santos",
		"groups": [],
		"cardPermissions": [
			"Edit"
		],
		"propertiesPermissions": [
			"Edit"
		]
	},
	{
		"id": "igor.oliveira",
		"name": "Igor Oliveira",
		"groups": [],
		"cardPermissions": [
			"Remove"
		],
		"propertiesPermissions": [
			"Remove"
		]
	},
	{
		"id": "igor.guimaraes",
		"name": "Igor Guimaraes",
		"groups": [],
		"cardPermissions": [
			"MoveCard"
		],
		"propertiesPermissions": [
			"Add",
			"Edit"
		]
	},
	{
		"id": "diogo.defante",
		"name": "Diogo Defante",
		"groups": [],
		"cardPermissions": [
			"Add",
			"Edit",
			"Remove",
			"MoveCard"
		],
		"propertiesPermissions": [
			"Add",
			"Edit",
			"Remove",
		]
	}
]