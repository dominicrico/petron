#!/bin/sh

check() {
  UPSTREAM=${1:-'@{u}'}
  LOCAL=$(git rev-parse @)
  REMOTE=$(git rev-parse "$UPSTREAM")
  BASE=$(git merge-base @ "$UPSTREAM")

  if [ $LOCAL = $REMOTE ]; then
      return 0
  elif [ $LOCAL = $BASE ]; then
      return 1
  elif [ $REMOTE = $BASE ]; then
      return 0
  else
      return 0
  fi
}

check
