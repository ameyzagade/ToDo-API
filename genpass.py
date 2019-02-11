import hashlib, os, sys, base64

fname = sys.argv[1]
passwd = sys.argv[2]

random_salt = "y?o$}8?mS-=F]-MFC8QaM>M;=(9<e`E*s?uk_s0?[@puL-||b-N=XJQ<#VV]mXoP"

random_salt = hashlib.md5(random_salt.encode()).hexdigest()
fname_digest = hashlib.md5(str.lower(fname).encode()).hexdigest()

salt = random_salt + fname_digest

passwd_hash = hashlib.md5(str.lower(passwd).encode()).hexdigest()

calc_hash = hashlib.md5((salt + passwd_hash).encode()).hexdigest()

encrypted_pass = base64.b64encode(calc_hash.encode())
print('Password hash for \'{}\' is: {}'.format(str.lower(fname), encrypted_pass.decode()))