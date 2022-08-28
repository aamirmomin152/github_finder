class Github {
  constructor() {
    this.client_id = '888aed9310c9d2cf45a1'; //Hide in secrets manager
    this.client_secret = '123d14ea2256f2adc0d40210deef897563d7bfca'; //Hide in secrets manager
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}
    ?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}