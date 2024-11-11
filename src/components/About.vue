<template>
  <div class="about-container">
    <h1>About</h1>
    <p>
      <a
        href="https://store.steampowered.com/app/3146520/WEBFISHING/"
        target="_blank"
        >WEBFISHING</a
      >
      is a multiplayer, chatroom-based fishing game created by
      <a href="https://x.com/lamedev_" target="_blank">lamedeveloper</a>. The
      game offers a cozy environment where players can catch nearly 100
      different species of fish, meet new people, customize their character to
      their liking, play instruments, and generally be a silly little critter.
    </p>
    <p>
      When you first join the game, you'll start with a fishing rod, a handful
      of worms and a dream. But through various upgrades, you'll soon know your
      way around the campsite like the back of your paw. Maybe you'll even find
      some secrets along the way...
      <a href="https://webfishing.wiki.gg/wiki/WEBFISHING_Wiki" target="_blank"
        >[src wiki]</a
      >
    </p>
    <section>
      <p>
        Here's the link to the site's source code
        <a href="https://github.com/puksh/webfishing-tracker" target="_blank"
          >[github]</a
        >. If you have any suggestions or feedback, please
        <a
          href="https://github.com/puksh/webfishing-tracker/issues"
          target="_blank"
          >open an issue</a
        >.
      </p>
      <p>
        This app is not affiliated with or endorsed by
        <a
          href="https://store.steampowered.com/app/3146520/WEBFISHING/"
          target="_blank"
          >WEBFISHING</a
        >.
      </p>
      <p>Website is up-to-date with version <b>1.0.9</b> of the game.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {},
};
</script>

<style scoped>
.about-container {
  padding: 20px;
  max-width: 800px;
  text-align: center;
  border-left: 4px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
section {
  margin-top: 200px;
}
a {
  color: #007bff;
  text-decoration: none;
}
</style>
