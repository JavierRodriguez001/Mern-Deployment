const StoreController = require('../controllers/store.controller')

module.exports = (app) => {
    app.get("/api/stores", StoreController.allStores)
    app.get("/api/stores/:id", StoreController.oneStore)
    app.post("/api/stores", StoreController.addStore)
    app.put("/api/stores/:id", StoreController.editStore)
    app.delete("/api/stores/:id", StoreController.deleteStore)
}