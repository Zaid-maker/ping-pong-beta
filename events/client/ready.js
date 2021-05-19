module.exports = (client) => {
    console.log(`Successfully logged in ${client.user.tag}`);

    // Activities
    const activities = ["v0.0.1-Beta", `over ${client.users.cache.size} users!`];
    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(activity, { type: "WATCHING" });
    }, 20000);
}