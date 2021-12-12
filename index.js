/*
 * @Author: Whzcorcd
 * @Date: 2021-12-12 16:29:25
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-12-12 17:17:32
 * @Description: file content
 */
const DockerGenerator = require('./lib/dockerGenerator')

module.exports.generate = (input) => { return new Promise((resolve, reject) => {
	try {
		resolve(DockerGenerator.generateDockerFile(input))
	} catch (error) {
		reject(error)
	}
}) }

module.exports.generateIgnoreFile = (ignoredFilesArray) => { return new Promise((resolve) => {
	let ignoredFileContent = ''

	ignoredFilesArray.forEach((ignoredFile) => {
		ignoredFileContent = `${ignoredFileContent + ignoredFile}\n`
	})

	return resolve(ignoredFileContent)
}) }
