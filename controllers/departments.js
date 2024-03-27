exports.getDepartments = (req, res, next) => {
    res.send("department listed");
};

exports.getAddDepartment = (req, res, next) => {
    res.send("department get called");
};

exports.postAddDepartment = (req, res, next) => {
    res.redirect("/");
};