export CLICOLOR=1

# define colors
C_DEFAULT="\[\033[m\]"
C_WHITE="\[\033[1m\]"
C_BLACK="\[\033[30m\]"
C_RED="\[\033[31m\]"
C_GREEN="\[\033[32m\]"
C_YELLOW="\[\033[33m\]"
C_BLUE="\[\033[34m\]"
C_PURPLE="\[\033[35m\]"
C_CYAN="\[\033[36m\]"
C_LIGHTGRAY="\[\033[37m\]"
C_DARKGRAY="\[\033[1;30m\]"
C_LIGHTRED="\[\033[1;31m\]"
C_LIGHTGREEN="\[\033[1;32m\]"
C_LIGHTYELLOW="\[\033[1;33m\]"
C_LIGHTBLUE="\[\033[1;34m\]"
C_LIGHTPURPLE="\[\033[1;35m\]"
C_LIGHTCYAN="\[\033[1;36m\]"
C_BG_BLACK="\[\033[40m\]"
C_BG_RED="\[\033[41m\]"
C_BG_GREEN="\[\033[42m\]"
C_BG_YELLOW="\[\033[43m\]"
C_BG_BLUE="\[\033[44m\]"
C_BG_PURPLE="\[\033[45m\]"
C_BG_CYAN="\[\033[46m\]"
C_BG_LIGHTGRAY="\[\033[47m\]"

txtblk='\e[0;30m' # Black - Regular
txtred='\e[0;31m' # Red
txtgrn='\e[0;32m' # Green
txtylw='\e[0;33m' # Yellow
txtblu='\e[0;34m' # Blue
txtpur='\e[0;35m' # Purple
txtcyn='\e[0;36m' # Cyan
txtwht='\e[0;37m' # White

bldblk='\e[1;30m' # Black - Bold
bldred='\e[1;31m' # Red
bldgrn='\e[1;32m' # Green
bldylw='\e[1;33m' # Yellow
bldblu='\e[1;34m' # Blue
bldpur='\e[1;35m' # Purple
bldcyn='\e[1;36m' # Cyan
bldwht='\e[1;37m' # White

unkblk='\e[4;30m' # Black - Underline
undred='\e[4;31m' # Red
undgrn='\e[4;32m' # Green
undylw='\e[4;33m' # Yellow
undblu='\e[4;34m' # Blue
undpur='\e[4;35m' # Purple
undcyn='\e[4;36m' # Cyan
undwht='\e[4;37m' # White

bakblk='\e[40m'   # Black - Background
bakred='\e[41m'   # Red
badgrn='\e[42m'   # Green
bakylw='\e[43m'   # Yellow
bakblu='\e[44m'   # Blue
bakpur='\e[45m'   # Purple
bakcyn='\e[46m'   # Cyan
bakwht='\e[47m'   # White

txtrst='\e[0m'    # Text Reset

export PS1="\n$C_LIGHTGREEN\u$C_DARKGRAY@$C_BLUE: $C_DARKGRAY: $C_LIGHTYELLOW\w\n$C_DARKGRAY\$$C_DEFAULT "

alias ll='ls -al'
alias search=grep
alias ..='cd ..'
alias ...='cd ../..'

alias si='cd ~/Sites'
alias mo='cd ~/MobileDevelopment'

alias bashme='subl ~/.profile'
alias flushdns='dscacheutil -flushcache; echo Flushed!'

alias gitpush='git push -u origin master'
alias sourcereset='source ~/.profile'

alias buildsite='~/scripts/structure_public.sh'
alias removesvn='rm -rf `find . -type d -name .svn`'
alias py='/usr/bin/python'
alias 777me='sudo chmod -R 777 .'
alias serveryaf='ssh -A tylersavery@72.51.30.169'

alias qp='git add .; git commit -m"quick update"; git push'
alias finder='open .'

alias newhost='sudo subl /etc/apache2/extra/httpd-vhosts.conf; sudo subl /etc/hosts'
alias restart='sudo apachectl restart'
alias mongo='/data/mongodb/bin/mongod'
alias calc='python ~/scripts/calc.py'
alias compdump='php /usr/local/bin/composer.phar dump-autoload'
alias chrome="/usr/bin/open '-a /Applications/Google Chrome.app'"

##
# Your previous /Users/admin/.profile file was backed up as /Users/admin/.profile.macports-saved_2011-12-04_at_19:25:26
##

# MacPorts Installer addition on 2011-12-04_at_19:25:26: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:/Users/tyler/bin:$PATH
export PATH="/usr/local/mysql/bin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.



print_before_the_prompt () {  
    printf "\n $txtred%s: $bldgrn%s $txtpur%s\n$txtrst" "$USER" "$PWD" "$(vcprompt)"  
} 

PROMPT_COMMAND=print_before_the_prompt
PS1='-> '

export PATH="/Users/tyler/mysql/bin:/Applications/blender.app/Contents/MacOS":$PATH

##
# Your previous /Users/tyler/.profile file was backed up as /Users/tyler/.profile.macports-saved_2012-03-30_at_12:42:21
##

# MacPorts Installer addition on 2012-03-30_at_12:42:21: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:/usr/local/pear:$PATH
# Finished adapting your PATH environment variable for use with MacPorts.


# Setting PATH for Python 3.2
# The orginal version is saved in .profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.2/bin:${PATH}"	
export PATH

#image magik
#export MAGICK_HOME="$HOME/ImageMagick-6.7.5"
#export PATH="$MAGICK_HOME/bin:$PATH"
#export DYLD_LIBRARY_PATH="$MAGICK_HOME/lib/"


