flag   = "0123{456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ}"
output = "Lvf0Mwg1Nxh2Oyi3Pzj{QAk4RBl5SCm6TDn7UEo8VFp9WGqaXHrbYIscZJtd}Kue"

for c in flag:
    print(f"flag[{flag.index(c)}] = output[{output.index(c)}]")