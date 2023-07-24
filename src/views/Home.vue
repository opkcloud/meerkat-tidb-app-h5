<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}

	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		background: white;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
		background-repeat: repeat-x;
		background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDU3IDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTcgOTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMUMzQTZCO30KCS5zdDF7ZmlsbDojMDU5OThGO30KCS5zdDJ7ZmlsbDojMDA2MDlBO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQ1LjMsMzUuNGwtMC41LDMuMWgtMjUuNGwwLjUtMy4xSDQzMWwwLjMtMi4ybDIuOCwyLjJINDQ1LjN6IE0zOTEuOSw0OS4yaDUuOGwtOC41LDE1LjZoMy41bDguNS0xNS42aDcuNwoJCWwtMS44LDExLjljMCwwLjMtMC4zLDAuNi0wLjcsMC42aC0zLjNsLTAuNiwzLjFoMy45YzEuOSwwLDMuNS0xLjQsMy44LTMuM2MwLDAsMCwwLDAsMGwyLjMtMTUuNGgtMjAuMkwzOTEuOSw0OS4yeiBNNDIyLjEsNDAuMgoJCWgyMC42bC0wLjksNS43Yy0wLjIsMS4yLTEuMywyLjItMi41LDIuMmgtMjAuMWwwLjktNi4yQzQyMC4zLDQwLjksNDIxLjIsNDAuMiw0MjIuMSw0MC4yeiBNNDIyLjgsNDVoMTYuMWwwLjMtMS43aC0xNi4xTDQyMi44LDQ1egoJCSBNNDM3LjksNTIuM2MwLjUtMC4zLDAuNy0xLDAuOC0xLjZsMC4yLTFoLTE2LjRsLTAuNSwzLjFoMTAuNUw0MzAsNTVoLTEzLjFsLTAuNSwzLjFoMTNsLTAuNCwzYzAsMC4zLTAuMywwLjUtMC42LDAuNWgtNi44CgkJbC0wLjUsMy4xaDhjMS40LDAsMi43LTEuMSwyLjktMi41bDAuNi00LjFoOS4ybDAuNS0zLjFoLTcuOEw0MzcuOSw1Mi4zeiBNNDEwLjIsMzMuMmgtM2gtMi44bC0wLjUsMi43aDQuNmwzLjYsNy43aDMuN2wtNC42LTkuOAoJCUM0MTEuMSwzMy41LDQxMC43LDMzLjIsNDEwLjIsMzMuMnogTTQwMiwzMy4yaC0zLjdsLTgsMTAuNGgzLjdMNDAyLDMzLjJ6IE0zMzEuMyw0Ny43bDEuNy0zLjZjMCwwLTAuOC0wLjMtMi40LTAuMwoJCWMtMS45LDAtMy40LDAuNi00LjcsMS4yYy0wLjksMC40LTIsMS4yLTMuMywyLjJjMC4yLTAuOSwwLjMtMS41LDAuMy0xLjVsLTQuNy0yLjVMMzE0LDY0LjhoNS4ybDIuNS0xMi41YzEuOC0xLjcsMy40LTMsNS4yLTMuOQoJCWMxLjEtMC41LDIuNC0wLjcsMy40LTAuOEMzMzAuMiw0Ny42LDMzMC45LDQ3LjYsMzMxLjMsNDcuN3ogTTI0MS4zLDUwLjFjMC4yLDEuMywwLjEsMi43LTAuMiw0LjRsLTAuMSwwLjloLTE2LjcKCQljMCwwLjksMC4xLDEuNiwwLjQsMi4yYzAuMywwLjcsMC43LDEuNCwxLjIsMS44YzAuNSwwLjUsMS4yLDAuOSwyLDEuMWMwLjgsMC4yLDEuOCwwLjQsMi45LDAuNGMwLjMsMCwwLjUsMCwwLjgsMAoJCWMxLjItMC4xLDIuMy0wLjMsMy40LTAuNmMwLjgtMC4yLDEuNy0wLjUsMi41LTAuOWMwLjgtMC4zLDIuOS0xLjQsMi45LTEuNGwtMC44LDQuMWMwLDAtMC4xLDAuMi0wLjEsMC4zYy0wLjEsMC4yLTAuMiwwLjMtMC40LDAuMwoJCWMtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjJjLTMuMSwxLjUtNi40LDIuMi05LjgsMi4yYy0xLjksMC0zLjUtMC4zLTQuOC0wLjhjLTEuNC0wLjUtMi41LTEuNC0zLjMtMi41Yy0wLjgtMS4xLTEuMy0yLjMtMS42LTMuNgoJCWMtMC4yLTEuMy0wLjItMi43LDAuMS00LjFjMC4zLTEuNiwwLjktMywxLjYtNC4zYzAuOC0xLjMsMS44LTIuNCwzLTMuNGMxLjItMSwyLjYtMS43LDQuMS0yLjJjMS41LTAuNSwzLTAuNyw0LjctMC43CgkJYzEuNiwwLDMsMC4yLDQuMiwwLjdjMS4yLDAuNSwyLjIsMS4yLDMsMi4xQzI0MC42LDQ3LjQsMjQxLjEsNDguNywyNDEuMyw1MC4xeiBNMjM2LjUsNTEuN2MwLTAuNSwwLTEtMC4xLTEuNAoJCWMtMC4xLTAuNi0wLjQtMS4xLTAuOC0xLjVjLTAuNC0wLjQtMC45LTAuNy0xLjQtMWMtMC42LTAuMi0xLjMtMC4zLTIuMS0wLjNjLTAuOSwwLTEuNywwLjEtMi40LDAuM2MtMC44LDAuMi0xLjQsMC41LTIsMC45CgkJYy0wLjYsMC40LTEuMSwxLTEuNiwxLjZjLTAuMywwLjQtMC42LDAuOC0wLjgsMS4zSDIzNi41eiBNMjIwLjUsMzMuMmwtMTAuMiwxOS40bC00LjctMTguOGwtMy42LDBsLTEuMSwxLjlMMTkxLDUyLjJsLTMuNC0xOC45CgkJaC01Ljl2MGwwLDBsNS43LDMxLjZoMS44bDEzLjItMjEuOGwwLjEsMC4zbDUuMywyMS42aDEuOGwxNy0zMS42SDIyMC41eiBNMjg2LjcsNDUuOGMtMC43LTAuNy0xLjUtMS4zLTIuNC0xLjYKCQljLTAuOS0wLjQtMi0wLjUtMy4yLTAuNWMtMC4zLDAtMC42LDAtMC45LDBsMCwwYzAsMC0yLjQsMC02LjUsMi4ybDEuOC04LjlsLTQuNS0zLjdsLTYuMiwzMS42aDUuMmwyLjctMTMuNmwwLDAKCQljMCwwLDIuMi0yLjYsNS4zLTMuNWMwLjUtMC4xLDEuNS0wLjQsMi41LTAuMmMwLjIsMCwwLjMsMC4xLDAuNCwwLjJjMC41LDAuMiwwLjksMC41LDEuMiwwLjljMC4zLDAuNCwwLjUsMC45LDAuNiwxLjUKCQljMC4xLDAuNiwwLjEsMS4yLTAuMSwxLjlsLTIuNiwxMi45aDUuMmwyLjUtMTIuNmMwLjMtMS40LDAuMy0yLjcsMC4xLTMuN0MyODcuOCw0Ny40LDI4Ny40LDQ2LjUsMjg2LjcsNDUuOHogTTI2MC4yLDQ5LjEKCQljLTEuMi0wLjktNS41LTMuMi03LjQtNC43Yy0xLTAuOC0xLjYtMS41LTEuOC0yLjFjLTAuMi0wLjktMC4xLTIuOCwzLjYtNC4zYzMuMi0xLjIsOC42LTAuMywxMS4yLDIuNGwxLTUuMWwtMC4xLTAuMQoJCWMtMC42LTAuNC0xLjItMC43LTEuOC0xYy0yLjEtMC45LTQuNy0xLjMtNy0xLjJjLTAuMiwwLDAuMiwwLDAsMGMtNi42LDAtMTIuMyw0LTEyLjMsOWMwLDEuMiwwLjMsMi41LDEsMy41YzAuNiwxLDEuNCwxLjcsMi4zLDIuNAoJCWMxLjQsMS4xLDYsMy42LDguNyw2YzEuMywxLjIsMS42LDIuNCwxLjQsMy4xYy0wLjQsMS42LTIuNSwzLjMtNi4xLDMuNWMtMS42LDAuMS02LTAuMS05LjYtMy4zbC0xLDUuMWwwLjEsMC4xCgkJYzAuNywwLjUsMS40LDAuOSwyLjEsMS4zYzIuNiwxLjIsNS42LDEuOCw4LjUsMS41YzYuNC0wLjIsMTEuNi00LjMsMTEuNi05LjRDMjY0LjUsNTQuMywyNjQsNTEuOSwyNjAuMiw0OS4xeiBNMzE0LjcsNDMuNgoJCWwtMS42LDcuOWwtMi42LDEzLjNoLTUuMmwwLDBoMGwwLjEtMC4zbDAuMy0xLjhjLTIuMiwxLjYtNC43LDIuNS03LjMsMi41Yy01LjksMC05LjgtNC44LTguNi0xMC44YzEuMi02LDYuOS0xMC44LDEyLjgtMTAuOAoJCWMyLjYsMCw0LjksMC45LDYuNCwyLjZsMC41LTIuNWgwLjJoNC44SDMxNC43eiBNMzA2LjMsNDkuM2wtOS4xLDBjLTAuMywwLTAuNiwwLjMtMC43LDAuNmwtMiw4LjljLTAuMSwwLjMsMC4xLDAuNiwwLjQsMC42bDAuMywwCgkJYzAsMCwwLDAsMCwwbDguNywwYzAuMywwLDAuNi0wLjMsMC42LTAuNmwwLjQtMS44bDEuNi03LjFDMzA2LjcsNDkuNiwzMDYuNiw0OS4zLDMwNi4zLDQ5LjN6IE0zNjguOSw1NS4zbDAuNiw5LjVoMy4xbC0wLjYtOS41CgkJSDM2OC45eiBNMzc2LjgsMzUuNGgtNi4ybC0yLjgtMi4ybC0wLjMsMi4yaC02LjJsLTAuNSwzLjFoMTUuNkwzNzYuOCwzNS40eiBNMzY1LjYsNDcuNGgzLjFoMmg0LjJsMC41LTMuMWgtMy40bDIuMS00LjFoLTMuMQoJCWwtMi4xLDQuMWgtMi41bC0wLjctNC4xaC0zLjFsMC44LDQuMWgtMy42bC0wLjUsMy4xaDQuMkgzNjUuNnogTTM4MC42LDQyLjFjMC4xLTAuNywwLjQtMS4zLDAuOC0xLjhsNi03LjFoLTMuN2wtNS40LDYuMwoJCWMtMC40LDAuNS0wLjYsMS4xLTAuNywxLjdsLTMuNSwyMy42aDMuMWwyLjYtMTcuNGgzLjRsLTIuNiwxNy40aDMuMWwyLjYtMTcuNGgxLjJsMC41LTMuMWgtNy43TDM4MC42LDQyLjF6IE0zNjguNCw1MC4xbDAuMy0xLjgKCQloLTMuMWwtMC4xLDAuNWwtMC4yLDEuM0gzNTlsLTAuNSwzLjFoMmgwLjNsLTQuMiwxMS42aDMuMmw0LjEtMTEuNmgwLjhsLTEuNywxMS42aDMuMWwwLjMtMS44bDAuMS0wLjlsMC43LTQuNGwwLjctNC41aDEuM2gwLjloNAoJCWwwLjUtMy4xSDM2OC40eiBNMzUyLDUwLjFjMC4yLDEuMywwLjEsMi43LTAuMiw0LjRsLTAuMSwwLjlIMzM1YzAsMC45LDAuMSwxLjYsMC40LDIuMmMwLjMsMC43LDAuNywxLjQsMS4yLDEuOAoJCWMwLjUsMC41LDEuMiwwLjksMiwxLjFjMC44LDAuMiwxLjgsMC40LDIuOSwwLjRjMC4zLDAsMC41LDAsMC44LDBjMS4yLTAuMSwyLjMtMC4zLDMuNC0wLjZjMC44LTAuMiwxLjctMC41LDIuNS0wLjkKCQljMC44LTAuMywyLjktMS40LDIuOS0xLjRsLTAuOCw0LjFjMCwwLTAuMSwwLjItMC4xLDAuM2MtMC4xLDAuMi0wLjIsMC4zLTAuNCwwLjNjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4yCgkJYy0zLjEsMS41LTYuNCwyLjItOS44LDIuMmMtMS45LDAtMy41LTAuMy00LjgtMC44Yy0xLjQtMC41LTIuNS0xLjQtMy4zLTIuNWMtMC44LTEuMS0xLjMtMi4zLTEuNi0zLjZjLTAuMi0xLjMtMC4yLTIuNywwLjEtNC4xCgkJYzAuMy0xLjYsMC45LTMsMS42LTQuM2MwLjgtMS4zLDEuOC0yLjQsMy0zLjRjMS4yLTEsMi42LTEuNyw0LjEtMi4yYzEuNS0wLjUsMy0wLjcsNC43LTAuN2MxLjYsMCwzLDAuMiw0LjIsMC43CgkJYzEuMiwwLjUsMi4yLDEuMiwzLDIuMUMzNTEuMyw0Ny40LDM1MS44LDQ4LjcsMzUyLDUwLjF6IE0zNDcuMiw1MS43YzAtMC41LDAtMS0wLjEtMS40Yy0wLjEtMC42LTAuNC0xLjEtMC44LTEuNQoJCWMtMC40LTAuNC0wLjktMC43LTEuNC0xYy0wLjYtMC4yLTEuMy0wLjMtMi4xLTAuM2MtMC45LDAtMS43LDAuMS0yLjQsMC4zYy0wLjgsMC4yLTEuNCwwLjUtMiwwLjljLTAuNiwwLjQtMS4xLDEtMS42LDEuNgoJCWMtMC4zLDAuNC0wLjYsMC44LTAuOCwxLjNIMzQ3LjJ6Ii8+Cgk8ZyBpZD0iWE1MSURfMTgxMF8iPgoJCTxnIGlkPSJYTUxJRF8xODExXyI+CgkJCTxnIGlkPSJYTUxJRF8xODQ0XyI+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTg0N18iIHg9IjMyLjMiIHk9IjEyLjEiIGNsYXNzPSJzdDEiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4NDZfIiB4PSIyMi44IiB5PSIxMi4xIiBjbGFzcz0ic3QxIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODQ1XyIgeD0iMTMuMyIgeT0iMTIuMSIgY2xhc3M9InN0MSIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCTwvZz4KCQkJPGcgaWQ9IlhNTElEXzE4NDBfIj4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODQzXyIgeD0iNTQuNSIgeT0iMzMuNCIgY2xhc3M9InN0MSIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTg0Ml8iIHg9IjQ1IiB5PSIzMy40IiBjbGFzcz0ic3QxIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODQxXyIgeD0iMzUuNSIgeT0iMzMuNCIgY2xhc3M9InN0MSIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCTwvZz4KCQkJPGcgaWQ9IlhNTElEXzE4MzZfIj4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODM5XyIgeD0iNzYuNyIgeT0iNTQuNyIgY2xhc3M9InN0MSIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgzOF8iIHg9IjY3LjIiIHk9IjU0LjciIGNsYXNzPSJzdDEiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MzdfIiB4PSI1Ny43IiB5PSI1NC43IiBjbGFzcz0ic3QxIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJPC9nPgoJCQk8ZyBpZD0iWE1MSURfMTgzMl8iPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MzVfIiB4PSI3Ni43IiB5PSIxMi4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODM0XyIgeD0iNjcuMiIgeT0iMTIuMSIgY2xhc3M9InN0MiIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgzM18iIHg9IjU3LjciIHk9IjEyLjEiIGNsYXNzPSJzdDIiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQk8L2c+CgkJCTxnIGlkPSJYTUxJRF8xODI4XyI+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgzMV8iIHg9Ijk4LjkiIHk9IjMzLjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MzBfIiB4PSI4OS40IiB5PSIzMy40IiBjbGFzcz0ic3QxIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODI5XyIgeD0iNzkuOSIgeT0iMzMuNCIgY2xhc3M9InN0MiIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCTwvZz4KCQkJPGcgaWQ9IlhNTElEXzE4MjRfIj4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODI3XyIgeD0iMTIxLjEiIHk9IjU0LjciIGNsYXNzPSJzdDIiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MjZfIiB4PSIxMTEuNiIgeT0iNTQuNyIgY2xhc3M9InN0MiIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgyNV8iIHg9IjEwMi4xIiB5PSI1NC43IiBjbGFzcz0ic3QyIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJPC9nPgoJCQk8ZyBpZD0iWE1MSURfMTgyMF8iPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MjNfIiB4PSIxMjEuMSIgeT0iMTIuMSIgY2xhc3M9InN0MSIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgyMl8iIHg9IjExMS42IiB5PSIxMi4xIiBjbGFzcz0ic3QxIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODIxXyIgeD0iMTAyLjEiIHk9IjEyLjEiIGNsYXNzPSJzdDEiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQk8L2c+CgkJCTxnIGlkPSJYTUxJRF8xODE2XyI+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgxOV8iIHg9IjE0My4zIiB5PSIzMy40IiBjbGFzcz0ic3QyIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODE4XyIgeD0iMTMzLjkiIHk9IjMzLjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MTdfIiB4PSIxMjQuNCIgeT0iMzMuNCIgY2xhc3M9InN0MiIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCTwvZz4KCQkJPGcgaWQ9IlhNTElEXzE4MTJfIj4KCQkJCTxyZWN0IGlkPSJYTUxJRF8xODE1XyIgeD0iMTY1LjYiIHk9IjEyLjEiIGNsYXNzPSJzdDIiIHdpZHRoPSIzLjIiIGhlaWdodD0iMjEuMyIvPgoJCQkJPHJlY3QgaWQ9IlhNTElEXzE4MTRfIiB4PSIxNTYuMSIgeT0iMTIuMSIgY2xhc3M9InN0MiIgd2lkdGg9IjMuMiIgaGVpZ2h0PSIyMS4zIi8+CgkJCQk8cmVjdCBpZD0iWE1MSURfMTgxM18iIHg9IjE0Ni42IiB5PSIxMi4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMy4yIiBoZWlnaHQ9IjIxLjMiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K);
	}

	.layout-nav {
		margin: 0 auto;
		color: white;
		/* 	width: 480px;
    margin-right: 20px; */
	}

	.layout-footer-center {
		text-align: center;
	}

	.layout .ivu-layout-header {
		background: #191a23;
	}

	.layout-topMiddleBottom .ivu-menu-light {
		background: none;
		color: #fff
	}
	.ivu-menu-dark {
		background: transparent
	}
	pre {
/* 	  white-space: pre-wrap;
	  word-wrap: break-word; */
	}
</style>
<template>
	<div class="layout">
		<Layout>
			<Header>
				<Menu mode="horizontal" theme="dark" active-name="1">
					<div class="layout-logo2" style="color: white">
						<!-- Meerkat AI实验室 -->
					</div>
					<div class="layout-nav">
<!-- 						<MenuItem name="1">
						<Icon type="ios-navigate"></Icon>
							<router-link to="/ai-search">问答/搜索</router-link>
						</MenuItem> -->
						<MenuItem name="1">
						<Icon type="ios-navigate"></Icon>
							<router-link to="/sentiment-analysis">情感打分</router-link>
						</MenuItem>
						<MenuItem name="2">
						<Icon type="ios-navigate"></Icon>
							<router-link to="/olap">数据分析</router-link>
						</MenuItem>
					</div>
				</Menu>
			</Header>
			<Content :style="{padding: '0 50px'}">
				<Breadcrumb :style="{margin: '20px 0'}">
					<BreadcrumbItem>AI Lab</BreadcrumbItem>
					<BreadcrumbItem>{{this.$route.name}}</BreadcrumbItem>
				</Breadcrumb>
				<Card>
					<div style="min-height: 390px;">
						<router-view>
							
						</router-view>
					</div>
				</Card>
			</Content>
			<Footer class="layout-footer-center">2023 &copy; Meerkat </Footer>
		</Layout>
	</div>
</template>
<script>
	import {
		completion
	} from '@/api/ai.js'

	export default {
		data() {
			return {
				inputForm: {
					input: '',
					select: '',
					radio: 'male',
					checkbox: [],
					switch: true,
					date: '',
					time: '',
					slider: [20, 50],
					textarea: ''
				},
				answer: null,
				loading: false
			}
		},
		methods: {
			contactUs() {
				window.location.href = ''
			},
			keyDown(e) {
				if (e.ctrlKey && e.keyCode == 13) { //用户点击了ctrl+enter触发
					this.handleSubmit('inputForm')
				}
			},
			handleSubmit(name) {
				this.loading = true
				if (this.inputForm.textarea == null || this.inputForm.textarea.length == 0) {
					this.$Message.info('请输入问题')
					this.loading = false
					return
				}
				let questionRequest = {
					question: this.inputForm.textarea
				}
				completion(questionRequest).then(res => {
					if (res.data != null && res.data.choices.length > 0) {
						// this.answer = res.data.choices[0].text.replace(/[\r\n]/g, '')
						this.answer = res.data.choices[0].text
					}
				}).catch(err => {
					this.$Message.error('err：' + err)
				}).finally(() => {
					this.loading = false
				})
			}
		}
	}
</script>
