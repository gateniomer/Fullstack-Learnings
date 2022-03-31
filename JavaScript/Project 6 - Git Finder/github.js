class Github{
  constructor() {
    this.client_id = 'addc79b00426a5355775';
    this.client_secret = 'e3293b659fe10a5050c61695f9eb53d8eb120a8d';
    this.repos_count=5;
    this.repos_sort='created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();


    return{
      profile,
      repos
    }
  }
}