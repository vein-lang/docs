# Installation



::: danger Attention! 
This documentation refers to version 0.30, but at the moment it has not yet been released to the public 
:::



::: tip
Linux users — The unzip package is required to install VeinSDK. 
Use sudo apt install unzip to install unzip package. 
Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1. Use uname -r to check Kernel version.
:::


::: code-group

```powershell [windows]
irm "https://vein-lang.org/install.ps1" | iex
```

```bash [macOS/Linux (curl)]
curl -fsSL https://vein-lang.org/install.sh | bash 
```
:::

:::tip
VeinSDK requires a minimum of Windows 10 version 1809
:::

## Checking installation

```bash [macOS/Linux (curl)]
$ rune --version
Vein SDK 0.*
[ishtar] 0.*
[veinc] 0.*
[rune] 0.*
```


## Installing VSCode Extensions


```bash [console]
code --install-extension veinlang.devkit
```

or download it manualy [Vein DevKit](https://marketplace.visualstudio.com/items?itemName=veinlang.devkit)


## Uninstalling


::: code-group

```powershell [windows]
powershell -c ~\.vein\uninstall.ps1
```

```bash [macOS/Linux (curl)]
rm -rf ~/.vein
```
:::
