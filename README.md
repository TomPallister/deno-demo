# How I installed deno

First installed https://asdf-vm.com/#/

Then...

`asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git`

`asdf install deno 0.38.0`

# Activate globally with:
`asdf global deno 0.38.0`

# Activate locally in the current folder with:
`asdf local deno 0.38.0`

# Build, Run and Test
`./build.sh` to build the container
`./run.sh` to run it
`curl localhost:1993` to check its working
