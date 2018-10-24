(async () => {
    try {
        const Database = require('./database');
        const data = {
            'name': 'Kamal'
        }

        const db = new Database('users')

        await db.push(data)
        // await db.updsate("57dad19535f20ad7ff80ddc52f745d55", { 'name': 'Kumar' })
        // await db.delete("57a8fb2feabee85ab4d56c3ed906ec30")
        // await db.deleteAll()

        // const res = await db.findOne("8ddf3535348edff864778808125197de")
        const res = await db.findAll()

        console.log(JSON.stringify(res, null, 2))

    } catch (error) {
        console.error(error)
    }
})()