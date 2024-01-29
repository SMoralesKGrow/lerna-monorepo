const github = require('github');

module.exports = async function (payload) {
    // Obtén el ID del PR
    const prId = payload.pull_request.pull_id;

    // Obtén el nombre de la rama del PR
    const branchName = payload.pull_request.head.ref;

    // Borra la rama
    await github.repos.deleteBranch({
        repo: payload.repository.full_name,
        branch_name: branchName,
    });
};
