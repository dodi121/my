const fs = require('fs')

global.creator = 'Bangellxs'// yourname
global.MONGO_DB_URI = "mongodb+srv://BangEllxs:BangEllxs123@bangellxs.a1izsxx.mongodb.net/?retryWrites=true&w=majority&appName=BangEllxs" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "ellxsxzaja" //isi apa aja bebas
global.your_email = "faldioardiarahman10@gmail.com" //email
global.email_password = "rschaefkxifwnnub" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
