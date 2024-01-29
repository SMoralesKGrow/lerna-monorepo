const octokit = require('@octokit/rest');

module.exports = async function (payload) {
    // Obtén el ID del PR
    const prId = payload.pull_request.pull_id;

    // Obtén el nombre de la rama del PR
    const branchName = payload.pull_request.head.ref;
    console.log("PR Id: ", prId);
    console.log("Branch: ", branchName);

    // Borra la rama
    await octokit.repos.deleteBranch({
        repo: payload.repository.full_name,
        branch_name: branchName,
    });
};
