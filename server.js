const FAVORITE_COLOR = process.env.COLOR

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("${FAVORITE_COLOR} rock!");
    await sleep(5000);
  }
}

main();
