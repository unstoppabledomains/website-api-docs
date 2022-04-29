import React from 'react'

const APILink = props => {
  const index = props.index
  const selected = props.selected
  const name = props.apiLinkData.name
  const apiLink = props.apiLinkData.url
  const deprecated = props.apiLinkData.deprecated

  function handleClick() {
    props.updateDefinitionLink(apiLink, index)
  }

  return (
    <div
      className={`api-link ${selected ? 'selected' : ''}`}
      onClick={() => handleClick()}
    >
      {deprecated ? <strike>{name}</strike> : name}
    </div>
  )
}

const Sidebar = props => {
  let apiLinks = []

  for (let i = 0; i < props.definitionList.length; i++) {
    apiLinks.push(
      <APILink
        index={i}
        selected={i === props.currentDefinitionIndex}
        apiLinkData={props.definitionList[i]}
        updateDefinitionLink={props.updateDefinitionLink}
      />,
    )
  }

  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU4IiB3aWR0aD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTg4LjY0NiAyNS4zMDhjLTIuMjg4IDAtNC4wNjYtLjYyMy01LjMzNS0xLjg3cy0xLjkwMy0zLjAxNC0xLjkwMy01LjMwMlY5LjZoNC4zNTZ2OC40MDRjMCAyLjQ2NC45NzUgMy42OTYgMi45MjYgMy42OTYgMS45MzYgMCAyLjkwNC0xLjIzMiAyLjkwNC0zLjY5NlY5LjZoNC4yOXY4LjUzNmMwIDIuMjg4LS42MzQgNC4wNTUtMS45MDMgNS4zMDJzLTMuMDQ3IDEuODctNS4zMzUgMS44N3pNMTEzLjQ4NCA5LjZWMjVoLTMuNTg2bC02Ljc5OC04LjIwNlYyNWgtNC4yNjhWOS42aDMuNTg2bDYuNzk4IDguMjA2VjkuNnptOC40OTIgMTUuNzA4Yy0xLjI0NyAwLTIuNDU3LS4xNTQtMy42My0uNDYycy0yLjEyNy0uNzE5LTIuODYtMS4yMzJsMS40My0zLjIxMmMuNjkuNDU1IDEuNDg5LjgyMSAyLjM5OCAxLjFzMS44MDQuNDE4IDIuNjg0LjQxOGMxLjY3MiAwIDIuNTA4LS40MTggMi41MDgtMS4yNTQgMC0uNDQtLjIzOC0uNzY2LS43MTUtLjk3OXMtMS4yNDMtLjQzNi0yLjI5OS0uNjcxYy0xLjE1OS0uMjUtMi4xMjctLjUxNy0yLjkwNC0uODAzcy0xLjQ0NS0uNzQ0LTIuMDAyLTEuMzc1LS44MzYtMS40ODEtLjgzNi0yLjU1MmMwLS45MzkuMjU3LTEuNzg2Ljc3LTIuNTQxczEuMjgtMS4zNTMgMi4yOTktMS43OTMgMi4yNy0uNjYgMy43NTEtLjY2YzEuMDEyIDAgMi4wMS4xMTQgMi45OTIuMzQxczEuODQ4LjU2MSAyLjU5NiAxLjAwMWwtMS4zNDIgMy4yMzRjLTEuNDY3LS43OTItMi44OS0xLjE4OC00LjI2OC0xLjE4OC0uODY1IDAtMS40OTYuMTI4LTEuODkyLjM4NS0uMzk2LjI1Ny0uNTk0LjU5LS41OTQgMS4wMDFzLjIzNS43MTkuNzA0LjkyNCAxLjIyNS40MTggMi4yNjYuNjM4YzEuMTczLjI1IDIuMTQ1LjUxNyAyLjkxNS44MDNzMS40MzcuNzQgMi4wMDIgMS4zNjRjLjU2NS42MjMuODQ3IDEuNDcuODQ3IDIuNTQxIDAgLjkyNC0uMjU3IDEuNzYtLjc3IDIuNTA4cy0xLjI4MyAxLjM0Ni0yLjMxIDEuNzkzLTIuMjczLjY3MS0zLjc0LjY3MXptMTIuMS0xMi4yNTRoLTQuNzNWOS42aDEzLjc5NHYzLjQ1NGgtNC43MDhWMjVoLTQuMzU2em0xOC40NTggMTIuMjU0Yy0xLjYyOCAwLTMuMDkxLS4zNDUtNC4zODktMS4wMzRzLTIuMzE3LTEuNjQzLTMuMDU4LTIuODYtMS4xMTEtMi41ODktMS4xMTEtNC4xMTQuMzctMi44OTcgMS4xMTEtNC4xMTQgMS43Ni0yLjE3IDMuMDU4LTIuODZjMS4yOTgtLjY5IDIuNzYxLTEuMDM0IDQuMzg5LTEuMDM0czMuMDkxLjM0NSA0LjM4OSAxLjAzNGMxLjI5OC42OSAyLjMxNyAxLjY0MyAzLjA1OCAyLjg2czEuMTExIDIuNTg5IDEuMTExIDQuMTE0LS4zNyAyLjg5Ny0xLjExMSA0LjExNC0xLjc2IDIuMTctMy4wNTggMi44Ni0yLjc2MSAxLjAzNC00LjM4OSAxLjAzNHptMC0zLjYwOGMuNzc3IDAgMS40ODEtLjE4MyAyLjExMi0uNTVzMS4xMy0uODg0IDEuNDk2LTEuNTUxYy4zNjctLjY2Ny41NS0xLjQzNC41NS0yLjI5OXMtLjE4My0xLjYzMi0uNTUtMi4yOTljLS4zNjctLjY2Ny0uODY1LTEuMTg0LTEuNDk2LTEuNTUxcy0xLjMzNS0uNTUtMi4xMTItLjU1LTEuNDgxLjE4My0yLjExMi41NS0xLjEzLjg4NC0xLjQ5NiAxLjU1MS0uNTUgMS40MzQtLjU1IDIuMjk5LjE4MyAxLjYzMi41NSAyLjI5OS44NjUgMS4xODQgMS40OTYgMS41NTEgMS4zMzUuNTUgMi4xMTIuNTV6TTE3MC40MiA5LjZjMS4zOTMgMCAyLjYwMy4yMzEgMy42My42OTMgMS4wMjcuNDYyIDEuODE5IDEuMTIyIDIuMzc2IDEuOThzLjgzNiAxLjg2Ni44MzYgMy4wMjUtLjI3OSAyLjE2My0uODM2IDMuMDE0LTEuMzUgMS41MDctMi4zNzYgMS45NjktMi4yMzcuNjkzLTMuNjMuNjkzaC0yLjY4NFYyNWgtNC4zNTZWOS42em0tLjI2NCA3Ljk0MmMuODk1IDAgMS41Ny0uMTk0IDIuMDI0LS41ODNzLjY4Mi0uOTQyLjY4Mi0xLjY2MS0uMjI3LTEuMjc2LS42ODItMS42NzItMS4xMy0uNTk0LTIuMDI0LS41OTRoLTIuNDJ2NC41MXpNMTg2LjYzNCA5LjZjMS4zOTMgMCAyLjYwMy4yMzEgMy42My42OTMgMS4wMjcuNDYyIDEuODE5IDEuMTIyIDIuMzc2IDEuOThzLjgzNiAxLjg2Ni44MzYgMy4wMjUtLjI3OSAyLjE2My0uODM2IDMuMDE0LTEuMzUgMS41MDctMi4zNzYgMS45NjktMi4yMzcuNjkzLTMuNjMuNjkzaC0yLjY4NFYyNWgtNC4zNTZWOS42em0tLjI2NCA3Ljk0MmMuODk1IDAgMS41Ny0uMTk0IDIuMDI0LS41ODNzLjY4Mi0uOTQyLjY4Mi0xLjY2MS0uMjI3LTEuMjc2LS42ODItMS42NzItMS4xMy0uNTk0LTIuMDI0LS41OTRoLTIuNDJ2NC41MXptMTkuNzU2IDQuNDY2aC02LjUxMkwxOTguNDA0IDI1aC00LjQ0NGw2Ljc5OC0xNS40aDQuMjlsNi44MiAxNS40aC00LjUzMnptLTEuMjc2LTMuMjEybC0xLjk4LTQuOTI4LTEuOTggNC45Mjh6bTIwLjA4Ni0xLjgyNmMuODguMzA4IDEuNTcuNzg4IDIuMDY4IDEuNDQxcy43NDggMS40NDEuNzQ4IDIuMzY1YzAgMS4zNS0uNTQzIDIuMzktMS42MjggMy4xMjRzLTIuNjU1IDEuMS00LjcwOCAxLjFIMjEzLjFWOS42aDcuODc2YzEuOTY1IDAgMy40NjEuMzYzIDQuNDg4IDEuMDg5IDEuMDI3LjcyNiAxLjU0IDEuNzA1IDEuNTQgMi45MzcgMCAuNzMzLS4xOCAxLjM5LS41MzkgMS45NjlzLS44NjkgMS4wMzgtMS41MjkgMS4zNzV6bS03LjUyNC00LjIyNHYyLjk3aDIuOTkyYzEuNDY3IDAgMi4yLS40OTkgMi4yLTEuNDk2IDAtLjk4My0uNzMzLTEuNDc0LTIuMi0xLjQ3NHptMy42NTIgOS4xMDhjMS41MjUgMCAyLjI4OC0uNTIgMi4yODgtMS41NjJzLS43NjMtMS41NjItMi4yODgtMS41NjJoLTMuNjUydjMuMTI0ek0yMzAuMDE4IDkuNmg0LjM1NnYxMS45NDZoNy4zNDhWMjVoLTExLjcwNHptMjUuNzg0IDEyLjAzNFYyNWgtMTIuMzY0VjkuNmgxMi4wNzh2My4zNjZoLTcuNzY2djIuNTk2aDYuODQydjMuMjU2aC02Ljg0MnYyLjgxNnpNODEuNTQgMzMuNmg3LjI4MmMxLjY4NyAwIDMuMTgzLjMxNSA0LjQ4OC45NDZzMi4zMTcgMS41MjUgMy4wMzYgMi42ODQgMS4wNzggMi41MTUgMS4wNzggNC4wNy0uMzYgMi45MTEtMS4wNzggNC4wNy0xLjczIDIuMDUzLTMuMDM2IDIuNjg0LTIuODAxLjk0Ni00LjQ4OC45NDZIODEuNTR6bTcuMTA2IDExLjkyNGMxLjMyIDAgMi4zOC0uMzc0IDMuMTc5LTEuMTIyczEuMTk5LTEuNzgyIDEuMTk5LTMuMTAyLS40LTIuMzU0LTEuMTk5LTMuMTAyLTEuODU5LTEuMTIyLTMuMTc5LTEuMTIyaC0yLjc1djguNDQ4em0xOC44MzIgMy43ODRjLTEuNjI4IDAtMy4wOTEtLjM0NS00LjM4OS0xLjAzNHMtMi4zMTctMS42NDMtMy4wNTgtMi44NmMtLjc0LTEuMjE3LTEuMTExLTIuNTg5LTEuMTExLTQuMTE0cy4zNy0yLjg5NyAxLjExMS00LjExNGMuNzQtMS4yMTcgMS43Ni0yLjE3IDMuMDU4LTIuODZzMi43NjEtMS4wMzQgNC4zODktMS4wMzQgMy4wOTEuMzQ1IDQuMzg5IDEuMDM0IDIuMzE3IDEuNjQzIDMuMDU4IDIuODYgMS4xMTEgMi41ODkgMS4xMTEgNC4xMTQtLjM3IDIuODk3LTEuMTExIDQuMTE0LTEuNzYgMi4xNy0zLjA1OCAyLjg2LTIuNzYxIDEuMDM0LTQuMzg5IDEuMDM0em0wLTMuNjA4Yy43NzcgMCAxLjQ4MS0uMTgzIDIuMTEyLS41NXMxLjEzLS44ODQgMS40OTYtMS41NTFjLjM2Ny0uNjY3LjU1LTEuNDM0LjU1LTIuMjk5cy0uMTgzLTEuNjMyLS41NS0yLjI5OWMtLjM2Ny0uNjY3LS44NjUtMS4xODQtMS40OTYtMS41NTFzLTEuMzM1LS41NS0yLjExMi0uNTUtMS40ODEuMTgzLTIuMTEyLjU1LTEuMTMuODg0LTEuNDk2IDEuNTUxYy0uMzY3LjY2Ny0uNTUgMS40MzQtLjU1IDIuMjk5cy4xODMgMS42MzIuNTUgMi4yOTljLjM2Ny42NjcuODY1IDEuMTg0IDEuNDk2IDEuNTUxczEuMzM1LjU1IDIuMTEyLjU1em0yNC43NSAzLjNsLS4wNDQtOC4xNjItMy45NiA2LjY0NGgtMS45MzZsLTMuOTM4LTYuNDI0VjQ5aC00LjAyNlYzMy42aDMuNTg2bDUuNDEyIDguODg4IDUuMjgtOC44ODhoMy41ODZsLjA0NCAxNS40em0xNy40MDItMi45OTJoLTYuNTEyTDE0MS45MDggNDloLTQuNDQ0bDYuNzk4LTE1LjRoNC4yOWw2LjgyIDE1LjRoLTQuNTMyem0tMS4yNzYtMy4yMTJsLTEuOTgtNC45MjgtMS45OCA0LjkyOHptOC4yNS05LjE5Nmg0LjM1NlY0OWgtNC4zNTZ6bTIyLjExIDBWNDloLTMuNTg2bC02Ljc5OC04LjIwNlY0OWgtNC4yNjhWMzMuNmgzLjU4Nmw2Ljc5OCA4LjIwNlYzMy42em04LjQ5MiAxNS43MDhjLTEuMjQ3IDAtMi40NTctLjE1NC0zLjYzLS40NjJzLTIuMTI3LS43MTktMi44Ni0xLjIzMmwxLjQzLTMuMjEyYy42OS40NTUgMS40ODkuODIxIDIuMzk4IDEuMXMxLjgwNC40MTggMi42ODQuNDE4YzEuNjcyIDAgMi41MDgtLjQxOCAyLjUwOC0xLjI1NCAwLS40NC0uMjM4LS43NjYtLjcxNS0uOTc5cy0xLjI0My0uNDM2LTIuMjk5LS42NzFjLTEuMTU5LS4yNS0yLjEyNy0uNTE3LTIuOTA0LS44MDNzLTEuNDQ1LS43NDQtMi4wMDItMS4zNzUtLjgzNi0xLjQ4MS0uODM2LTIuNTUyYzAtLjkzOS4yNTctMS43ODYuNzctMi41NDFzMS4yOC0xLjM1MyAyLjI5OS0xLjc5MyAyLjI3LS42NiAzLjc1MS0uNjZjMS4wMTIgMCAyLjAxLjExNCAyLjk5Mi4zNDFzMS44NDguNTYxIDIuNTk2IDEuMDAxbC0xLjM0MiAzLjIzNGMtMS40NjctLjc5Mi0yLjg5LTEuMTg4LTQuMjY4LTEuMTg4LS44NjUgMC0xLjQ5Ni4xMjgtMS44OTIuMzg1LS4zOTYuMjU3LS41OTQuNTktLjU5NCAxLjAwMXMuMjM1LjcxOS43MDQuOTI0IDEuMjI1LjQxOCAyLjI2Ni42MzhjMS4xNzMuMjUgMi4xNDUuNTE3IDIuOTE1LjgwM3MxLjQzNy43NCAyLjAwMiAxLjM2NC44NDcgMS40Ny44NDcgMi41NDFjMCAuOTI0LS4yNTcgMS43Ni0uNzcgMi41MDhzLTEuMjgzIDEuMzQ2LTIuMzEgMS43OTMtMi4yNzMuNjcxLTMuNzQuNjcxeiIgZmlsbD0iIzAxMDYxNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTY0IDF2MjJMMCA0OXoiIGZpbGw9IiMyZmU5ZmYiLz48cGF0aCBkPSJNNTIgMHYzOGMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMHMtMjAtOC45NTQtMjAtMjBWMjJsMTItNi42VjM4YTcgNyAwIDAwMTQgMFY3Ljd6IiBmaWxsPSIjNGM0N2Y3Ii8+PC9nPjwvc3ZnPg==" alt="Unstoppable Domains" />
      </div>
      <div className="side-bar-body">
        <h3>Unstoppable API</h3>
        {apiLinks}
      </div>
    </div>
  )
}

export default Sidebar